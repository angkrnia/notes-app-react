export default function ArchiveButton({ archived, id, onArchive }) {
    return (
        <button
            type="button"
            onClick={() => onArchive(id)}
            className="btn btn-archive"
        >
            {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
    );
}
