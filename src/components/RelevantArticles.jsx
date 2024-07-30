import ArticleCard from "./ArticleCard";

function RelevantArticles() {
    return(
        <>
            <div className="w-100  text-[#21383d] text-[30px] font-semibold font-['Roboto']">Articles you might like as well</div>
            <div className="w-100  text-[#7c7b7b] text-base font-normal font-['Inter'] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="grid grid-cols-3 gap-4">
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>

            </div>
        </>
    );
}
export default RelevantArticles