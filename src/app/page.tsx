"use client";

import { useEffect, useState } from "react";

type Message = {
  id: number;
  title: string;
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/messages`
        );
        if (!res.ok) {
          console.error("Erreur API:", res.statusText);
        } else {
          const json = await res.json();
          setMessages(json?.data || []);
        }
      } catch (err) {
        console.error("Erreur fetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Loading...</p>;

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
