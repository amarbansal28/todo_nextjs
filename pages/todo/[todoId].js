import Header from "../../components/header";

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();
  const paths = data.map((d) => {
      return {
        params : {
          todoId: d.id.toString(),
        }
      }
  })
  return {
      paths,
      fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.todoId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default function Home({data}) {
  return (
    <div>
      <Header />
      <div>{data.title}</div>
    </div>
  );
}
