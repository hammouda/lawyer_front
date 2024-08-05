import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function ArticleComments() {
    const [comments, setComments] = useState([
        {
            user: "User name",
            time: "2 mins",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex in saepe natus totam quibusdam, nobis repellat, hic iste quisquam officia veniam magnam, consectetur animi molestias earum maxime soluta laudantium?"
        },
        {
            user: "User name",
            time: "2 mins",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex in saepe natus totam quibusdam, nobis repellat, hic iste quisquam officia veniam magnam, consectetur animi molestias earum maxime soluta laudantium?"
        }
    ])
    const [comment, setComment] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([
            ...comments,
            {
                user: "User name",
                time: "0 mins",
                text: comment
            }
        ]);
        setComment(null);
    }
    return(
        <div className="my-8 p-4 bg-secondary rounded-lg flex flex-col gap-y-3">
            {comments && comments.map((comment) => (
                <div className="p-4 bg-blue-light rounded-lg flex flex-col gap-y-3">
                    <div className="flex justify-between items-center text-black">
                        <p>{comment.user}</p>
                        <p className="text-sm">{comment.time}</p>
                    </div>
                    <p className="text-justify text-blue-dark">{comment.text}</p>
                </div>
            ))}
            <div className="px-5 py-3 flex justify-between items-center">
                <p className="font-semibold text-sm text-white">
                    View all {comments.length} comments
                </p>
                <ChevronDownIcon className="w-4 h-4 text-white" />
            </div>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="flex justify-between items-center bg-[#86868b] rounded-lg p-3 gap-x-3">
                <input type="text" name="comment" value={comment} onChange={(e)=>setComment(e.target.value)}  className="bg-[#86868b] h-6 w-full text-secondary font-light placeholder:text-secondary placeholder:font-light focus-visible:border-0 focus-visible:outline-offset-0" placeholder="Add new Comment"/>
                <button type="submit"><PaperAirplaneIcon className="w-6 h-6 text-secondary -rotate-45"/> </button>
            </div>
            </form>
            
        </div>
    );
}
export default ArticleComments;