import './saladsBlock.scss';
import React from 'react';

function saladsBlock() {
	return (
		<div className="salads__block__wrapper">
			<div id="salat" className="salads__block__header">
				<p>
					<strong>Салаты</strong>
				</p>
			</div>
			<div className="container__wrapper">
				<div className="menu__block__container">
					<hr className="menu__block__container__line" />
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Салат весенний</strong>
							</p>
							<p className="menu__block__container__item__description">
								Сочный салат из огурцов, помидор и ридиса
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
								<strong>Салат из помидоров с луком </strong>
							</p>
							<p className="menu__block__container__item__description">
								Свежие помидоры с луком
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>200</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Салат оливье</strong>
							</p>
							<p className="menu__block__container__item__description">
								Жемчужина праздничных столов
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
								<strong>Салат цезарь</strong>
							</p>
							<p className="menu__block__container__item__description">
								Классический салат Цезарь, известный во всем
								мире
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
								<strong>
									Салат из помидоров с цицмати и сыром
								</strong>
							</p>
							<p className="menu__block__container__item__description">
								Свежие помидоры, цицмати и сыром
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>500</strong>
							</p>
						</div>
					</div>
				</div>
				<div className="menu_wrapper">
					<hr className="menu__block__container__line" />
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Буррата со спелыми томатами</strong>
							</p>
							<p className="menu__block__container__item__description">
								Спелые овощи, итальянский сыр, базилик
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>690</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Сельдь под шубой</strong>
							</p>
							<p className="menu__block__container__item__description">
								Вкусный салат из сельди и овощей
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
								<strong>Кобб</strong>
							</p>
							<p className="menu__block__container__item__description">
								Очень популярный в США салат
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
								<strong>Винегрет</strong>
							</p>
							<p className="menu__block__container__item__description">
								Закусочный салат из отварной свеклы
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>200</strong>
							</p>
						</div>
					</div>
					<div className="menu__block__container__item">
						<div>
							<p className="menu__block__container__item__header">
								<strong>Греческий салат</strong>
							</p>
							<p className="menu__block__container__item__description">
								Свежий салат из помидор родом из Греции
							</p>
						</div>
						<div className="menu__block__container__item__price">
							<p>
								<strong>400</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default saladsBlock;
