import { useSelector, useDispatch } from "react-redux"
import { getNews } from "./redux/actions/actionCreator"
import News from "./components/news/news";

const App = () => {
    const latestNews = useSelector(store => store.news.latestNews || []);
    const popularNews = useSelector(store => store.news.popularNews || [])
    const { latestNewsError, popularNewsError } = useSelector(store => store.errors || {})
    const dispatch = useDispatch();

    const handleNews = () => {
        dispatch(getNews());
    }

    return (
        <div>
            <button onClick={() => handleNews()}>GetNews</button>
            <News news={latestNews} title="Latest news"  error={latestNewsError}/>
            <News news={popularNews} title="Popular news" error={popularNewsError} />
        </div>
    )
}

export default App;