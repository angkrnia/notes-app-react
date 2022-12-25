import { showFormattedDate } from '../utils';

export default function NoteBody({ title, date, body }) {
    return (
        <div>
            <h3>{title}</h3>
            <time dateTime={date}>{showFormattedDate(date)}</time>
            <p>{body}</p>
        </div>
    );
}
