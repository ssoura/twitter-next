import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();
  const router = useRouter();
  const handleSignOut = () => {
    if (!data) {
      router.push("/login");
    }
    if (status === "authenticated") {
      signOut();
    }
  };
  return (
    <div>
      <h1 class="text-blue-500 bold text-6xl">hello</h1>
      <button
        class="bg-White text-DarkGray  p-2 my-4 rounded"
        onClick={handleSignOut}
      >
        Logout
      </button>
    </div>
  );
}
