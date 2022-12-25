import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ list, onDelete, onArchive }) {
    if (list.length) {
        return (
            <div className="note-list flex">
                {list.map((item) => (
                    <NoteItem
                        key={item.id}
                        {...item}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    />
                ))}
            </div>
        );
    }

    return <h4>Tidak ada catatan</h4>;
}

export default NoteList;
