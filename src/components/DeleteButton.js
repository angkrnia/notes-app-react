export default function DeleteButton({ onDelete, id }) {
    return (
        <button
            type="button"
            onClick={() => onDelete(id)}
            className="btn btn-delete"
        >
            Delete
        </button>
    );
}
