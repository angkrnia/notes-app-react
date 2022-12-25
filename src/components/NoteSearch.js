export default function NoteSearch({ onSearch }) {
    return (
        <input
            type="text"
            className="input-note"
            placeholder="Search"
            onChange={(e) => onSearch(e.target.value)}
        />
    );
}
