import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { memo, useState } from "react";

type Item = {
    id:string;
    content: string;
}

const initialItems: Item[] = [
    {id: "1", content: "りんご🍎"},
    {id: "2", content: "ぶどう🍇"},
    {id: "3", content: "バナナ🍌"},
]

export const Dnd = memo(() => {
    const [items, setItems] = useState<Item[]>(initialItems);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const newItems = Array.from(items);
        const [moved] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, moved);

        setItems(newItems);
    };

    return (
    <>
        <div style={{ padding: 32, maxWidth: 400, margin: "0 auto" }}>
            <h1 style={{ textAlign: "center" }}>ドラッグ＆ドロップ</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable-1">
                {(provided) => (
            <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                backgroundColor: "#f0f0f0",
                padding: 16,
                borderRadius: 8,
                minHeight: 200,
            }}
            >
                {items.map((item, index) => (
                <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                >
                    {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                        userSelect: "none",
                        padding: 16,
                        marginBottom: 8,
                        backgroundColor: snapshot.isDragging ? "#a0d2ff" : "#fff",
                        boxShadow: snapshot.isDragging
                            ? "0 4px 8px rgba(0,0,0,0.2)"
                            : "0 1px 3px rgba(0,0,0,0.1)",
                        borderRadius: 4,
                        ...provided.draggableProps.style,
                        }}
                    >
                        {item.content}
                    </div>
                    )}
                </Draggable>
                ))}
                {provided.placeholder}
            </div>
            )}
                </Droppable>
            </DragDropContext>
        </div>
    </>
    )
});