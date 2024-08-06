/**
 * Displays news block
 */

import Currencies from "./Currencies";
import NewsHeaders from "./NewsHeader";
import { List } from "../List/List";
import { currencies } from "../../data/currencies";
import { news } from "../../data/news";
import { newsHeaders } from "../../data/newsHeaders";
import Ad from "./Ad";

const News = () => {
  return (
    <div className="news_container">
      <div className="news_item">
        <NewsHeaders headers={newsHeaders} />
        <List items={news} />
        <Currencies array={currencies} />
      </div>
      <div className="ad_item" style={{ width: "18rem" }}>
        <Ad img="https://i.klerk.ru/itlNks2nfhrT-UjS2LQKgW4uWlzuUXwgGHk5LiDIGZw/w:1500/aHR0cHM6Ly93d3cu/a2xlcmsucnUvdWdj/L2Jsb2dQb3N0LzQ2/NGY4ZDU1MWJmN2U2/ZjE4ZDdkOTdkMWIx/YmQwNjY3LmpwZw.webp">
          <h5 className="ad_header">Работа над ошибками</h5>
          <p className="ad_text">Смотрите в Яндекс и запоминайте</p>
        </Ad>
      </div>
    </div>
  );
};

export default News;
