import Header from "../../components/header";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default function Todo({ data }) {
  return (
    <>
      <Header />
      <div>
        {data.map((d) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div key={d.id}>
              <Link href={`/todo/${d.id}`}>
                <h5 key={d.id}>{d.title}</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
