import React, { useState, useRef, useEffect } from "react";
import List, { ListItemType, ListProps } from ".";
import ListItem from "./ListItem";

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */

const EXAMPLE_DATA: ListItemType[] = [
    {
        "id": "1",
        "category": "Fiction",
        "summary": "In a distant future where humanity has colonized the stars, a rogue pilot is caught in a web of political intrigue, interstellar warfare, and forbidden love. As galaxies collide and secrets unravel, she must choose between loyalty to her crew and the survival of the universe itself.",
        "title": "Galactic Drift",
        "labels": [
            { "id": "1", "value": "Sci-Fi" },
            { "id": "2", "value": "Adventure" }
        ],
        "createdAt": "2025-04-16T10:00:00Z"
    },
    {
        "id": "2",
        "category": "Non-Fiction",
        "summary": "This book delves deep into the inner workings of modern economics, unpacking the forces that shape our financial world. From inflation and interest rates to the psychology of markets, it offers a clear, engaging look at the system that governs our everyday lives.",
        "title": "Money Talks",
        "labels": [
            { "id": "1", "value": "Economics" }
        ],
        "createdAt": "2025-04-15T09:15:00Z"
    },
    {
        "id": "3",
        "category": "Fantasy",
        "summary": "In a land where magic is both feared and revered, a young outcast discovers an ancient power buried deep within him. As kingdoms prepare for war, he must rise to become the mage he was destined to be, facing dragons, traitors, and the darkness in his own heart.",
        "title": "The Mage's War",
        "labels": [
            { "id": "1", "value": "Magic" },
            { "id": "2", "value": "Dragons" },
            { "id": "3", "value": "Battle" }
        ],
        "createdAt": "2025-04-14T13:30:00Z"
    },
    {
        "id": "4",
        "category": "Biography",
        "summary": "Told through intimate stories and unseen personal writings, this biography traces the incredible journey of a cultural icon. From humble beginnings to global recognition, it reveals the trials, triumphs, and humanity behind the spotlight.",
        "title": "Beyond the Fame",
        "labels": [],
        "createdAt": "2025-04-13T08:00:00Z"
    },
    {
        "id": "5",
        "category": "Mystery",
        "summary": "When a renowned archaeologist goes missing, Detective Claire Harlow is called to a foggy coastal town with more secrets than answers. As she digs into the case, she uncovers a chilling connection to a string of disappearances spanning decades.",
        "title": "Shadows in the Fog",
        "labels": [
            { "id": "1", "value": "Detective" },
            { "id": "2", "value": "Crime" }
        ],
        "createdAt": "2025-04-12T11:45:00Z"
    },
    {
        "id": "6",
        "category": "Science",
        "summary": "From the Big Bang to black holes, this book takes readers on a thrilling ride through the cosmos. With vivid explanations and awe-inspiring discoveries, it breaks down complex theories and shows how science continues to shape our understanding of the universe.",
        "title": "Cosmic Code",
        "labels": [
            { "id": "1", "value": "Physics" },
            { "id": "2", "value": "Astronomy" }
        ],
        "createdAt": "2025-04-11T07:25:00Z"
    },
    {
        "id": "7",
        "category": "Fiction",
        "summary": "Set against the sun-drenched hills of Tuscany, this is the story of two strangers who find each other when they least expect it. As they explore ancient villages and vineyard-covered landscapes, they discover that love can bloom even from the most broken places.",
        "title": "Tuscan Skies",
        "labels": [
            { "id": "1", "value": "Romance" }
        ],
        "createdAt": "2025-04-10T19:20:00Z"
    },
    {
        "id": "8",
        "category": "Horror",
        "summary": "After inheriting a remote estate, a young woman begins to experience disturbing visions and voices in the night. As the haunting grows stronger, she uncovers the grim history of the house—and realizes the dead may not be resting peacefully.",
        "title": "The Silent House",
        "labels": [
            { "id": "1", "value": "Ghosts" },
            { "id": "2", "value": "Paranormal" },
            { "id": "3", "value": "Thriller" }
        ],
        "createdAt": "2025-04-09T22:10:00Z"
    },
    {
        "id": "9",
        "category": "History",
        "summary": "From the sands of Egypt to the ruins of Mesopotamia, this book uncovers the rise and fall of great empires that shaped civilization. Through vivid storytelling and archaeological insight, it paints a sweeping picture of the ancient world’s power and legacy.",
        "title": "Empires of Sand",
        "labels": [
            { "id": "1", "value": "Ancient" }
        ],
        "createdAt": "2025-04-08T14:40:00Z"
    },
    {
        "id": "10",
        "category": "Technology",
        "summary": "Artificial Intelligence is no longer science fiction—it’s reshaping industries, ethics, and everyday life. This book explores the rapid evolution of AI, its potential to enhance or endanger humanity, and the urgent questions we must answer now.",
        "title": "Thinking Machines",
        "labels": [
            { "id": "1", "value": "AI" },
            { "id": "2", "value": "Innovation" }
        ],
        "createdAt": new Date()
    }
];

const EXAMPLE_DATA_OWN_CHILDREN_RENDER: ListItemType[] = [
    {
        "id": "11",
        "category": "Thriller",
        "summary": "In the heart of Berlin, a journalist uncovers a conspiracy that dates back to the Cold War. As she races to publish the truth, powerful enemies close in—and one mistake could cost her everything.",
        "title": "Echoes of Silence",
        "labels": [
            { "id": "1", "value": "Espionage" },
            { "id": "2", "value": "Suspense" }
        ],
        "createdAt": "2025-04-16T12:05:00Z"
    },
    {
        "id": "1",
        "category": "Fantasy",
        "summary": "A cursed prince and a runaway witch form an unlikely alliance to break a centuries-old enchantment. Their quest leads them through enchanted forests, forgotten ruins, and a truth neither of them is ready to face.",
        "title": "Thorns and Flames",
        "labels": [
            { "id": "1", "value": "Witchcraft" },
            { "id": "2", "value": "Quest" }
        ],
        "createdAt": "2025-04-15T17:22:00Z"
    },
    {
        "id": "13",
        "category": "Science",
        "summary": "With climate change accelerating, this book explores the latest scientific breakthroughs in renewable energy, carbon capture, and sustainable living. It’s a call to action wrapped in data, innovation, and hope.",
        "title": "The Tipping Point",
        "labels": [
            { "id": "1", "value": "Environment" },
            { "id": "2", "value": "Innovation" },
            { "id": "3", "value": "Future" }
        ],
        "createdAt": "2025-04-14T14:18:00Z"
    },
    {
        "id": "14",
        "category": "Romance",
        "summary": "After a bitter divorce, a woman retreats to a sleepy coastal town to rebuild her life. There, she meets a widowed fisherman with secrets of his own, and together they find love in the most unexpected season.",
        "title": "Low Tide Hearts",
        "labels": [
            { "id": "1", "value": "Healing" },
            { "id": "2", "value": "New Beginnings" }
        ],
        "createdAt": "2025-04-13T08:35:00Z"
    },
    {
        "id": "15",
        "category": "Horror",
        "summary": "A group of friends rent an isolated cabin for the weekend, only to discover a sinister force trapped beneath the floorboards. As night falls, the line between dreams and reality begins to blur.",
        "title": "The Hollow Below",
        "labels": [
            { "id": "1", "value": "Supernatural" },
            { "id": "2", "value": "Survival" }
        ],
        "createdAt": "2025-04-12T20:10:00Z"
    },
    {
        "id": "16",
        "category": "Biography",
        "summary": "Chronicling the remarkable journey of a Nobel Prize-winning doctor, this biography captures the heart and mind of a pioneer whose work in immunology changed the world—and whose compassion touched millions.",
        "title": "Pulse of a Healer",
        "labels": [],
        "createdAt": "2025-04-11T10:50:00Z"
    },
    {
        "id": "17",
        "category": "Fiction",
        "summary": "In a near-future city plagued by surveillance, a rebellious graffiti artist sparks a revolution with nothing but a spray can and a secret past. The story unfolds in vibrant colors against a backdrop of gray conformity.",
        "title": "Tagged",
        "labels": [
            { "id": "1", "value": "Dystopia" },
            { "id": "2", "value": "Rebellion" },
            { "id": "3", "value": "Art" }
        ],
        "createdAt": "2025-04-10T13:27:00Z"
    },
    {
        "id": "18",
        "category": "Non-Fiction",
        "summary": "This deeply personal narrative examines the intersection of identity, culture, and belonging in a globalized world. Told through essays and stories, it offers a heartfelt exploration of home and displacement.",
        "title": "Where I Begin",
        "labels": [
            { "id": "1", "value": "Memoir" }
        ],
        "createdAt": "2025-04-09T15:05:00Z"
    },
    {
        "id": "19",
        "category": "History",
        "summary": "Through newly discovered letters and documents, this book re-examines the fall of the Roman Republic. It challenges long-held assumptions and paints a vivid portrait of power, betrayal, and legacy.",
        "title": "Twilight of the Senate",
        "labels": [
            { "id": "1", "value": "Ancient Rome" },
            { "id": "2", "value": "Politics" }
        ],
        "createdAt": "2025-04-08T11:48:00Z"
    },
    {
        "id": "20",
        "category": "Technology",
        "summary": "Blending science and storytelling, this book explores how the next wave of innovation—quantum computing—will redefine everything from healthcare to national security. It’s a glimpse into a future that's arriving faster than we think.",
        "title": "The Quantum Horizon",
        "labels": [
            { "id": "1", "value": "Tech" },
            { "id": "2", "value": "Quantum" }
        ],
        "createdAt": "2025-04-07T09:33:00Z"
    }
];

const ListWrapper = (props: {
    renderFromChildren: boolean;
    showSelectOnRight: boolean;
    showCollapse: boolean;
}) => {
    const [childrenELements, setChildrenELements] = useState<any[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleClick = (event: any) => {
        console.log(event);
    }

    const handleSelect = (event: any) => {
        const { name, checked } = event.currentTarget;
        setSelectedItems(prev => {
            if (checked) {
                return prev.includes(name) ? prev : [...prev, name];
            } else {
                return prev.filter(item => item !== name);
            }
        });
    }

    useEffect(() => {
        if (props.renderFromChildren) {
            setSelectedItems(prev =>
                prev.filter(id => EXAMPLE_DATA_OWN_CHILDREN_RENDER.some(item => item.id === id))
            );
        } else {
            setSelectedItems(prev =>
                prev.filter(id => EXAMPLE_DATA.some(item => item.id === id))
            );
        }
    }, [props.renderFromChildren]);

    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems])

    useEffect(() => {
        setChildrenELements(
            EXAMPLE_DATA_OWN_CHILDREN_RENDER.map(item => (
                <ListItem
                    key={item.id}
                >
                    {item.title} - {item.summary}
                </ListItem>
            )) || [])
    }, [])

    return (
        <div style={{ padding: "24px" }}>
            <List
                data={props.renderFromChildren ? EXAMPLE_DATA_OWN_CHILDREN_RENDER : EXAMPLE_DATA}
                onClick={handleClick}
                selectedItems={selectedItems}
                onSelect={handleSelect}
                showSelectOnRight={props.showSelectOnRight}
                showCollapse={props.showCollapse}
            >
                {props.renderFromChildren && childrenELements}
            </List>
        </div>
    );
};

export default ListWrapper;