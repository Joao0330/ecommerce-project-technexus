// import components
import NewsCard from '../../components/home/NewsCard';

// import context
import { useStates } from '../../context/useStates';

const News = () => {
	const { news } = useStates();

	return (
		<section className='news'>
			<div className='container'>
				<div className='news__wrapper'>
					<div className='news__top'>
						<h2>Latest News</h2>
						<p>See the latest news from the tech world.</p>
					</div>

					{/* <div className='news__content'>
						{news.map((item, index) => (
							<NewsCard key={index} item={item} />
						))}
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default News;
