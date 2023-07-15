import './drinksBlock.scss';
import React from 'react';

function drinksBlock() {
	return (
		<div className="drinks__block__wrapper">
			<div className="drinks__block__menu">
				<div id="drinks" className="drinks__block__menu__header">
					<p>
						<strong>Напитки</strong>
					</p>
				</div>
				<div className="container__wrapper">
					<div className="menu__block__container">
						<p className="menu__block__container__header">
							<strong>Холодные напитки</strong>
						</p>
						<hr className="menu__block__container__line" />
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Смузи с медовой дыней</strong>
								</p>
								<p className="menu__block__container__item__description">
									Дыня, мята, лимон
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Морс ягодный</strong>
								</p>
								<p className="menu__block__container__item__description">
									Сок ягод, сахар, вода
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Грейпфрутовый лимонад</strong>
								</p>
								<p className="menu__block__container__item__description">
									Грейпфрут, содовая, корень имбиря
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Арбузный слинг</strong>
								</p>
								<p className="menu__block__container__item__description">
									Лимонный сок, спрайт, арбуз
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Сок апельсиновый</strong>
								</p>
								<p className="menu__block__container__item__description">
									Свежевыжатый апельсин
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Мохито с лимоном</strong>
								</p>
								<p className="menu__block__container__item__description">
									Легендарный Освежающий напиток
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>300</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Клубничный лимонад</strong>
								</p>
								<p className="menu__block__container__item__description">
									Клубника, содовая, лайм, мята
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
					</div>
					<div className="menu__wrapper">
						<p className="menu__block__container__header">
							<strong>Горячие напитки</strong>
						</p>
						<hr className="menu__block__container__line" />
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Черный чай</strong>
								</p>
								<p className="menu__block__container__item__description">
									Крепкий, насыщенный
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Зеленый чай</strong>
								</p>
								<p className="menu__block__container__item__description">
									{' '}
									Нежный, свежий вкус
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Капучино</strong>
								</p>
								<p className="menu__block__container__item__description">
									Идеальный баланс вкуса кофе и молока
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Эспрессо</strong>
								</p>
								<p className="menu__block__container__item__description">
									Настойщий итальянский напиток
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Американо</strong>
								</p>
								<p className="menu__block__container__item__description">
									То же эспрессо, но разбавленное кипятком
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Латте</strong>
								</p>
								<p className="menu__block__container__item__description">
									Эспрессо со взбитом молоком
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="drinks__block__images">
				<div>
					<br></br>
					<p className="drinks__block__images__header">
						<strong>Популярные напитки</strong>
					</p>
				</div>
				<div className="booking_block">
					<hr className="img_line"></hr>
				</div>
				<div className="img__block">
					<div className="img_block__element">
						<img
							className="img__block__element__picture"
							src="https://cdn.pixabay.com/photo/2017/01/11/11/02/cocktail-1971488_960_720.jpg"
						/>
						<div className="img__block__element__picture__discription">
							<p>Мохито б/а</p>
						</div>
					</div>
					<div className="img_block__element">
						<img
							className="img__block__element__picture"
							src="https://cdn.pixabay.com/photo/2017/01/11/11/02/cocktail-1971489_960_720.jpg"
						></img>
						<div className="img__block__element__picture__discription">
							<p>Молочный коктейль</p>
						</div>
					</div>
					<div className="img_block__element">
						<img
							className="img__block__element__picture"
							src="https://cdn.pixabay.com/photo/2017/01/11/11/02/cocktail-1971490_960_720.jpg"
						></img>
						<div className="img__block__element__picture__discription">
							<p>Мохито</p>
						</div>
					</div>
					<div className="img_block__element">
						<img
							className="img__block__element__picture"
							src="https://www.crosscafe.cz/photo-ct-1275---.jpg"
						></img>
						<div className="img__block__element__picture__discription">
							<p>Мохито с лимоном</p>
						</div>
					</div>
					<div className="img_block__element">
						<img
							className="img__block__element__picture"
							src="https://eda.yandex.ru/images/1387779/65fe07e6ceae518333ddea577e4ef8b8-680x500.jpeg"
						></img>
						<div className="img__block__element__picture__discription">
							<p>Морс</p>
						</div>
					</div>
					<div className="img_block__element">
						<img
							className="img__block__element__picture"
							src="http://www.templatemaniacs.com/OCT/OPC04170501EA0101/EA004/image/cache/catalog/coffee/21-500x500.jpg"
						></img>
						<div className="img__block__element__picture__discription">
							<p>Капучино</p>
						</div>
					</div>
					<div className="img_block__element">
						<img
							className="img__block__element__picture"
							src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614563324_13-p-kofe-na-belom-fone-14.jpg"
						></img>
						<div className="img__block__element__picture__discription">
							<p>Эспрессо</p>
						</div>
					</div>
					<div className="img_block__element">
						<img
							className="img__block__element__picture"
							src="https://www.healthyfood.com.ec/wp-content/uploads/2020/03/productos_coffee_healthyfood.jpg"
						></img>
						<div className="img__block__element__picture__discription">
							<p>Американо</p>
						</div>
					</div>
					<div className="img_block__element">
						<img
							className="img__block__element__picture"
							src="https://media.discordapp.net/attachments/937605817279070300/958103890421768192/2433b6dbaeface8b.png?width=469&height=468"
						></img>
						<div className="img__block__element__picture__discription">
							<p>Чай черный</p>
						</div>
					</div>
					<div className="img_block__element">
						<img
							className="img__block__element__picture"
							src="https://media.discordapp.net/attachments/937605817279070300/958104956467044383/8938a477d31d8d7a.png?width=584&height=468"
						></img>
						<div className="img__block__element__picture__discription">
							<p>Латте</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default drinksBlock;
