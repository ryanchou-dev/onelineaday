import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import { getSession, signIn, signOut } from 'next-auth/react'
import { db } from '../fb/Firebase'
import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { useState, } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
  ret: string;
  ext: any;
  day: string;
  yesterday: string;
  month: string;
  year: string;
  name: string;
}

export default function Home({
  ret,
  ext,
  day,
  yesterday,
  month,
  year,
  name,
}: Props) {
  const [progress, setProgress] = useState(1);
  const [lk, setlk] = useState("");
  const [cpy, setCpy] = useState("share your story!");
  const uid = ext?.user?.id?.toString();
  const shareURL =
    (typeof window !== "undefined" ? window.location.origin : null) +
    "/log/" +
    uid;

  const onCopy = (e: any) => {
    setCpy("link copied!");
    navigator.clipboard.writeText(shareURL);

    // delay after copy
    setTimeout(() => {
      setCpy("share your story!");
    }, 1500);
  };

  const onEdit = (e: any) => {
    const nlog = e.target.value;
    const docRef = doc(db, uid, day);

    setProgress(0);
    if (nlog == "") {
      deleteDoc(docRef);
      setProgress(1);
    } else {
      setDoc(docRef, {
        log: nlog,
        serverTime: serverTimestamp(),
      })
        .then((snpsht) => {
          setProgress(1);
        })
    }
  };

  const getLog = (e: any) => {
    const date = e.target.value.split("-");
    const fdate = +date[1] + "-" + +date[2] + "-" + date[0];

    const docRef = doc(db, ext?.user?.id?.toString(), fdate);
    getDoc(docRef).then((snpsht) => {
      if (snpsht.exists()) {
        const dt = snpsht.data();
        setlk(dt.log);
      } else {
        setlk("you didn't write anything on this day.");
      }
    });
  };

  const getLogD = (date: any) => {
    const docRef = doc(db, ext?.user?.id?.toString(), date);

    getDoc(docRef).then((snpsht) => {
      if (snpsht.exists()) {
        const dt = snpsht.data();
        setlk(dt.log);
      } else {
        setlk("you didn't write anything on this day.");
      }
    });
  };

  return (
    <>
      <Head>
        {name ? (
          <title>{name}&apos;s ~one line a day~</title>
        ) : (
          <title>~one line a day~</title>
        )}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="~one line a day~" />
        <meta name="og:description" content="a minimalistic diary." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={`md:py-24 md:px-36 px-24 py-16 min-h-screen bg-slate-100`}>
        <p className={`font-semibold text-xl`}>~one line a day~ <Link href={`https://github.com/ryanchou-dev/onelineaday`}>
            <a target={`_blank`}><AiFillGithub className={`inline w-6 h-6 hover:scale-105 duration-300`} /></a>
          </Link></p> 
        <p className={`mt-3 text-base`}>a minimalistic diary.</p>

        {!ext ? (
          <button
            onClick={() => signIn("google")}
            className={`hover:scale-105 duration-300 mt-6 space-x-2 flex items-center font-md w-max p-2.5 border-2 rounded-lg`}
          >
            <FcGoogle className={`w-6 h-6`} /> <span>Sign in with Google</span>
          </button>
        ) : (
          <>
            <button
              onClick={() => signOut()}
              className={`hover:scale-105 duration-300 mt-6 flex items-center font-md w-max p-2.5 border-2 rounded-lg`}
            >
              <span>Sign Out</span>
            </button>
            <div className={`mt-8 py-6 w-full border-t border-green-600 border-opacity-40`}></div>

            <p className={`text-base`}>hi {name}, today is: {day}!! (GMT)</p>
            <label className={`block font-medium text-md mb-2`} htmlFor="log">
              how was your day? (keep it short!)
            </label>
            <textarea
              defaultValue={ret == null ? "" : ret}
              onInput={onEdit}
              rows={8}
              maxLength={450}
              className={`w-11/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="log"
              placeholder="it's lonely o.o | maybe you should write something..."
            />
            {progress == 1 ? (
              <p className={`mt-3 text-base text-green-600`}>saved!</p>
            ) : (
              <p className={`mt-3 text-base text-blue-600`}>saving...</p>
            )}

            <a onClick={onCopy}>
              <button className={`mt-6 hover:scale-105 duration-300 text-blue-600 bg-blue-200 bg-opacity-40 p-2 rounded-md`}>
                {cpy}
              </button>
            </a>

            <div className={`mt-8 py-2 w-full border-t border-green-600 border-opacity-40`}></div>
            <p className={`text-gray-700 text-md font-medium mb-2 mt-6`}>
              what happened ________?
            </p>
            <div className={`gap-2 flex flex-wrap`}>
              <button
                onClick={() => getLogD(yesterday)}
                className={`hover:scale-105 duration-300 p-2.5 bg-slate-400 bg-opacity-20 rounded-md`}
              >
                yesterday
              </button>

              <button
                onClick={() => getLogD(month)}
                className={`hover:scale-105 duration-300 p-2.5 bg-slate-400 bg-opacity-20 rounded-md`}
              >
                a month ago (30 days)
              </button>
              <button
                onClick={() => getLogD(year)}
                className={`hover:scale-105 duration-300 p-2.5 bg-slate-400 bg-opacity-20 rounded-md`}
              >
                a year ago
              </button>
              <input
                onChange={getLog}
                className={`hover:scale-105 duration-300 p-2.5 bg-slate-400 bg-opacity-20 rounded-md`}
                type="date"
                value={day}
                id="lk"
                name="lk"
              />
            </div>

            {lk != "" ? (
              <>
                <div className={`mt-8 py-2 w-full border-t-2 border-dashed border-blue-600 border-opacity-40`}></div>
                <p className={`break-words pre-wrap overflow-x-auto p-2.5 shadow-sm bg-white font-sans rounded-sm mt-3 text-base whitespace-pre-wrap`}>
                  {lk}
                </p>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const id = session?.user?.id?.toString();
  const name = session?.user?.name?.split(" ")[0];
  if (id && name) {
    const nameSnap = await getDoc(doc(db, id, "name"));

    if (!nameSnap.exists()) {
      setDoc(doc(db, id, "name"), {
        name: name.toLowerCase(),
      });
    }
  }

  // ew, dates.
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const today =
    date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
  date.setDate(date.getDate() - 1);
  const yesterday =
    date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
  date.setDate(date.getDate() + 1);
  date.setMonth(date.getMonth() - 1);
  const month =
    date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
  date.setMonth(date.getMonth() + 1);
  date.setFullYear(date.getFullYear() - 1);
  const year =
    date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();

  // already wrote down something
  const docSnap = await getDoc(doc(db, id ?? "'", today));
  if (!docSnap.exists()) {
    return {
      props: {
        ret: null,
        ext: session,
        day: today,
        yesterday: yesterday,
        month: month,
        year: year,
        name: name?.toLowerCase() ?? null,
      },
    };
  } else {
    const dt = docSnap.data();
    return {
      props: {
        ret: dt.log,
        ext: session,
        day: today,
        yesterday: yesterday,
        month: month,
        year: year,
        name: name?.toLowerCase() ?? null,
      },
    };
  }
}
