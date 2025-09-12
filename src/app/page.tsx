async function getMessages() {
  const res = await fetch("http://localhost:1337/api/messages", { cache: "no-store" });
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const messages = await getMessages();

  return (
    <main style={{ padding: 40 }}>
      <h1>Messages depuis Strapi 🚀</h1>
      <ul>
        {messages.map((m: any) => (
          <li key={m.id} style={{ marginBottom: 20 }}>
            <strong>{m.title}</strong>
            <p>{m.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
