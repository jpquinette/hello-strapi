type Message = {
  id: number;
  title: string;
  content: string;
};

export default async function Home() {
  let messages: Message[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/messages`, { cache: "no-store" });

    if (!res.ok) {
      console.error("Erreur API:", res.statusText);
    } else {
      const json = await res.json();
      messages = json?.data || [];
    }
  } catch (err) {
    console.error("Erreur fetch:", err);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Messages depuis Strapi 🚀</h1>
      <ul>
        {messages.length > 0 ? (
          messages.map((m) => (
            <li key={m.id} style={{ marginBottom: 20 }}>
              <strong>{m.title}</strong>
              <p>{m.content}</p>
            </li>
          ))
        ) : (
          <p>Aucun message trouvé.</p>
        )}
      </ul>
    </main>
  );
}
