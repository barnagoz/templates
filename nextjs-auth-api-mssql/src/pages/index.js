import {Inter} from "next/font/google";
import SignIn from "@/components/signinbutton";
import {useSession} from "next-auth/react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const inter = Inter({subsets: ["latin"]});

export default function Home () {
    const session = useSession();
    return (
        <div className={"p-4"}>
            <h1 className={"text-2xl font-semibold mb-2"}>Home</h1>
            {
                session.data ? (
                    <>
                        <p className={"mb-2"}>Bejelentkezve, mint {session.data.user.name}</p>
                        <Link href={"/app"}><Button>Példa táblázat →</Button></Link>
                    </>
                ) : (
                    <SignIn/>
                )
            }
        </div>
    )
}
