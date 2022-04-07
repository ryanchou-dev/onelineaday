import { db } from '../../fb/Firebase';
import {
  query,
  orderBy,
  limit,
  doc,
  getDocs,
  collection,
  getDoc,
} from 'firebase/firestore';

const Log = ({ logs, name }: { logs: string; name: string }) => {
  const resp = JSON.parse(logs);

  return (
    <div className={"md:py-24 md:px-36 px-24 py-16 min-h-screen bg-slate-100"}>
      <p className={"font-semibold text-xl"}>{name}&apos;s ~one line a day~</p>
      <p className={"mt-3 text-base"}>(latest 100 entries)</p>
      <div
        className={
          "mt-4 py-4 w-full border-t border-blue-600 border-opacity-40"
        }
      />
      {Object.keys(resp).map((k) => (
        <div key={k}>
          <p className={"font-semibold text-xl"}>{k}</p>
          <p
            className={
              "break-words pre-wrap overflow-x-auto p-2.5 shadow-sm bg-white font-sans rounded-sm mt-3 text-base whitespace-pre-wrap"
            }
          >
            {resp[k]}
          </p>
          <div
            className={
              "break-words mt-8 py-2 w-full border-t border-green-600 border-opacity-40"
            }
          />
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps({ params }: { params: any }) {
  const colRef = collection(db, params.slug);

  const nameRef = await getDoc(doc(db, params.slug, "name"));
  const name = nameRef?.data()?.name ?? "who are you?";
  const q = query(colRef, orderBy("serverTime", "desc"), limit(100));
  const qsnp = await getDocs(q);

  const mp = new Map();
  qsnp.docs.map((doc) => mp.set(doc.id, doc.data().log));

  const qjs = Object.fromEntries(mp);

  if (name == "who are you?") {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      logs: JSON.stringify(qjs),
      name: name,
    },
  };
}

export default Log;