import styles from '../Notes.module.css';

async function getNote(noteId: string) {
    const rest = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            next: { revalidate: 10 },
        }
    );
    const data = await rest.json();
    return data;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);
    return (
        <div>
            <h1>Notes</h1>
            <div className={styles.note}>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    )
}