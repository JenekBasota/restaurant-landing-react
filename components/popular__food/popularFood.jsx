import './popularFood.scss';
import React from 'react';

function popularFood() {
	return (
		<div className="img__block__wrapper">
			<div>
				<br></br>
				<p className="img__block__header">
					<strong>Популярные блюда</strong>
				</p>
			</div>
			<div className="booking_block">
				<hr className="img_line"></hr>
				<a href="#" className="booking">
					<strong>Забронировать стол</strong>
				</a>
			</div>
			<div className="img__block">
				<div className="img_block__element">
					<img
						className="img__block__element__picture"
						src="https://i.pinimg.com/236x/ca/7f/05/ca7f052ff3f1338e7a9ba350e1f822e6--food-plating-gourmet-foods.jpg"
					></img>
					<div className="img__block__element__picture__discription">
						<p>Салат с креветками</p>
					</div>
				</div>
				<div className="img_block__element">
					<img
						className="img__block__element__picture"
						src="https://rumkasvobodi.ru/img/23512988_329_q55.avif"
					></img>
					<div className="img__block__element__picture__discription">
						<p>Сэндвич с ветчиной</p>
					</div>
				</div>
				<div className="img_block__element">
					<img
						className="img__block__element__picture"
						src="https://rumkasvobodi.ru/img/23513268_329_q55.avif"
					></img>
					<div className="img__block__element__picture__discription">
						<p>Тартар из угря</p>
					</div>
				</div>
				<div className="img_block__element">
					<img
						className="img__block__element__picture"
						src="https://rumkasvobodi.ru/img/23511757_329_q55.avif"
					></img>
					<div className="img__block__element__picture__discription">
						<p>Сырные палочки</p>
					</div>
				</div>
				<div className="img_block__element">
					<img
						className="img__block__element__picture"
						src="https://media.discordapp.net/attachments/937605817279070300/957694796863004792/2134.png?width=701&height=701"
					></img>
					<div className="img__block__element__picture__discription">
						<p>Салат цезарь</p>
					</div>
				</div>
				<div className="img_block__element">
					<img
						className="img__block__element__picture"
						src="https://rumkasvobodi.ru/img/22283445_329_q55.avif"
					></img>
					<div className="img__block__element__picture__discription">
						<p>Телячьи щечки</p>
					</div>
				</div>
				<div className="img_block__element">
					<img
						className="img__block__element__picture"
						src="https://rumkasvobodi.ru/img/22610115_329_q55.avif"
					></img>
					<div className="img__block__element__picture__discription">
						<p>Римская пицца</p>
					</div>
				</div>
				<div className="img_block__element">
					<img
						className="img__block__element__picture"
						src="https://rumkasvobodi.ru/img/23513341_329_q55.avif"
					></img>
					<div className="img__block__element__picture__discription">
						<p>Стейк из индейки</p>
					</div>
				</div>
				<div className="img_block__element">
					<img
						className="img__block__element__picture"
						src="https://rumkasvobodi.ru/img/23512632_329_q55.avif"
					></img>
					<div className="img__block__element__picture__discription">
						<p>Куриный паштет</p>
					</div>
				</div>
				<div className="img_block__element">
					<img
						className="img__block__element__picture"
						src="https://rumkasvobodi.ru/img/23602748_329_q55.avif"
					></img>
					<div className="img__block__element__picture__discription">
						<p>Брускетта с баклажанами</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default popularFood;
