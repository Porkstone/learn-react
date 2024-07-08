import type { NextPage } from "next";
import { trpc } from "~/server/trpc";

const Home: NextPage = () => {
    const hello = trpc.example.hello.useQuery({ text: "hello Sharon" });

    return (<div>Hello {hello.data?.text}</div>
    );
};

export default Home;
