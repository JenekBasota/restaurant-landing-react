import React from 'react';
import './menuBlock.scss';

function menuBlock() {
	return (
		<div className="menu__block__wrapper">
			<div id="menu" className="menu__block__header__text">
				<p>
					<strong>Меню</strong>
				</p>
			</div>
			<div className="container__wrapper">
				<div className="menu__block__container">
					<p className="menu__block__container__header">
						<strong>Горячие блюда</strong>
					</p>
					<hr className="menu__block__container__line" />
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Котлеты по-киевски</strong>
							</p>
							<p className="menu__block__container__item__description">
								Отбивное куриное филе с кусочком масла
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>450</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Стейк из индейки</strong>
							</p>
							<p className="menu__block__container__item__description">
								Сочный и ароматный стейк
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>600</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Телячьи щечки</strong>
							</p>
							<p className="menu__block__container__item__description">
								Мясной отруб с тонкими прожилками коллагена
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>500</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Стейк Стриплойн</strong>
							</p>
							<p className="menu__block__container__item__description">
								Филейный кусочек мраморной говядины
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>1500</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Фрикадельки со спагетти</strong>
							</p>
							<p className="menu__block__container__item__description">
								Настоящий итальянский вкус
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>490</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Куриный паштет</strong>
							</p>
							<p className="menu__block__container__item__description">
								Простое и вкусное блюдо
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>350</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Спагетти с креветками</strong>
							</p>
							<p className="menu__block__container__item__description">
								Нежное и вкусное блюдо родом из Италии
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>550</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Мясо по-французки</strong>
							</p>
							<p className="menu__block__container__item__description">
								Популярно блюдо родом из Франции
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>690</strong>
							</p>
						</div>
					</div>
				</div>
				<div className="menu__block__container">
					<p className="menu__block__container__header">
						<strong>Супы</strong>
					</p>
					<hr className="main_menu_line" />
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Лапша куриная</strong>
							</p>
							<p className="menu__block__container__item__description">
								Вкусное и яркое блюдо азиатской кухни
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>390</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Крем-суп из тыквы </strong>
							</p>
							<p className="menu__block__container__item__description">
								Яркий и полезнйы суп
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>450</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Харчо </strong>
							</p>
							<p className="menu__block__container__item__description">
								Вкусный, ароматный, острый
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>500</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Чечевичный суп</strong>
							</p>
							<p className="menu__block__container__item__description">
								Вкусный и сытный суп из чечевицы с мясом
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>350</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Борщ</strong>
							</p>
							<p className="menu__block__container__item__description">
								Со сметаной и зеленью
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>350</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="second_menu">
				<div className="container__wrapper">
					<div className="menu__block__container">
						<p className="menu__block__container__header">
							<strong>Блюда на углях</strong>
						</p>
						<hr className="main_menu_line" />
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Шашлык из бараньих рёбрышек</strong>
								</p>
								<p className="menu__block__container__item__description">
									Вкуснейшие блюдо на углях
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>1100</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Шашлык из куриного бедра</strong>
								</p>
								<p className="menu__block__container__item__description">
									Сочное куриное бедро, обжаренное на углях
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>790</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Шашлык из филе лосося</strong>
								</p>
								<p className="menu__block__container__item__description">
									Вкусный шашлык из красной рыбы
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>1290</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Люля кебаб из курицы</strong>
								</p>
								<p className="menu__block__container__item__description">
									Традиционное восточное блюдо
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>700</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Люля-кебаб из телятины</strong>
								</p>
								<p className="menu__block__container__item__description">
									Идеально обжаренное мясо на углях
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>890</strong>
								</p>
							</div>
						</div>
					</div>
					<div className="menu__block__container">
						<p className="menu__block__container__header">
							<strong>Закуски</strong>
						</p>
						<hr className="main_menu_line" />
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Сырные палочки</strong>
								</p>
								<p className="menu__block__container__item__description">
									Отличная хрустящая закуска
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
									<strong>Тартар из угря</strong>
								</p>
								<p className="menu__block__container__item__description">
									Огурцов и страчеллы
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>500</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Брускетта с баклажанами</strong>
								</p>
								<p className="menu__block__container__item__description">
									Подусушенный хлеб, баклажан, сыр, помидоры
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>400</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Римская пицца</strong>
								</p>
								<p className="menu__block__container__item__description">
									Настоящий вкус итальянской пиццы
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>350</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Сэндвич с ростбифом</strong>
								</p>
								<p className="menu__block__container__item__description">
									Идеальный мясной перекус
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
									<strong>Картофель по деревенски</strong>
								</p>
								<p className="menu__block__container__item__description">
									Аппетитный печеный картофель
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
									<strong>
										Гречневая каша с жареными грибами
									</strong>
								</p>
								<p className="menu__block__container__item__description">
									Вкусная, рассыпчатая, с шампиньонами,
									по-купечески
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>390</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default menuBlock;
