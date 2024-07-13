const NewsCard = ({ item, index }) => {
	return (
		<article className='news__content-card' key={index}>
			<img src={item.urlToImage ? item.urlToImage : 'https://via.placeholder.com/200'} alt={item.title} className='img-fluid' />
			<div className='news__content-card-info'>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<a href={item.url} target='_blank'>
					Read more
				</a>
			</div>
			<div className='news__content-card-bottom'>
				<span>{item.publishedAt.split('T')[0]}</span>
				<strong>{item.author}</strong>
			</div>
		</article>
	);
};

export default NewsCard;
