import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header>
        <h1>To-Do</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/todo">Todo</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
