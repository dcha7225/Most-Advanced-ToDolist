import "./list.css";

interface Props {
    items: string[];
    heading: string;
    selected: number;
    onSelect: (index: number) => void;
}

function List({ items, heading, onSelect, selected }: Props) {
    return (
        <>
            <h5>{heading}</h5>
            {items.length === 0 ? <p>No Items</p> : null}
            <ul className="list-group list-group-numbered">
                {items.map((item, index) => (
                    <li
                        className={
                            selected == index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            onSelect(index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default List;
