const URL = 'https://newsapi.org/v2/everything?q=Tech&apiKey=b9dd818f885941bda30e6df5ede540b5';

export const fetchNews = async () => {
	try {
		const response = await fetch(URL);
		const data = await response.json();

		// Filter out removed articles
		const filteredArticles = data.articles.filter(article => article.title !== '[Removed]');

		// Shuffle articles to get 3 random articles
		const randomArticles = filteredArticles.sort(() => Math.random() - 0.5).slice(0, 3);

		return randomArticles;
	} catch (error) {
		console.log('error');
	}
};
