type Message = {
  id: number;
  attributes: {
    title: string;
    content: string;
  };
};

export default async function Home() {
  const res = await fetch("https://hello-strapi-backend.onrender.com/api/messages", { cache: "no-store" });
  const data: { data: Message[] } = await res.json();

  return (
    <main style={{ padding: 40 }}>
      <h1>Messages depuis Strapi 🚀</h1>
      <ul>
        {data.data.map((m) => (
          <li key={m.id} style={{ marginBottom: 20 }}>
            <strong>{m.attributes.title}</strong>
            <p>{m.attributes.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
