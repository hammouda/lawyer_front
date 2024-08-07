import ArticleCard from "./ArticleCard";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

function RelevantArticles() {
    const [articles, setArticles]= useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://54.247.72.79/api/articles');
            if (Array.isArray(response.data.articles)) {
              setArticles(response.data.articles.slice(0, 3));
            } else {
              console.error('API response is not an array');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);
    return(
        <>
            <div className="w-100  text-[#21383d] text-[30px] font-semibold font-['Roboto'] mt-24">Articles you might like as well</div>
            <div className="w-100  text-[#7c7b7b] text-base font-normal font-['Inter'] mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="grid md:grid-cols-3 gap-4">
            {articles.map((article)=>(
                   <ArticleCard article={article}/>
                ))
            }

            </div>
        </>
    );
}
export default RelevantArticles