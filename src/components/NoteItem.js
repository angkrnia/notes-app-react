import NoteBody from './NoteBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

export default function NoteItem({ onDelete, onArchive, ...props }) {
    const { id, title, createdAt, body, archived } = props;
    return (
        <div className="note-item" key={id}>
            <NoteBody title={title} body={body} date={createdAt} />
            <div className="note-button">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton
                    archived={archived}
                    id={id}
                    onArchive={onArchive}
                />
            </div>
        </div>
    );
}
