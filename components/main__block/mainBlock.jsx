import { useState } from 'react';
import './mainBlock.scss';
import React from 'react';

function mainBlock() {
	const [showRegistration, setShowRegistration] = useState(false);

	const handleRegistrationClick = () => {
		setShowRegistration(true);
	};

	const handleRegistrationClose = () => {
		setShowRegistration(false);
	};
	return (
		<div className="main_block__wrapper">
			<div className="main_block__image"></div>
			<div className="main__block__navigation">
				<ul className="main__block__navigation-list">
					<li>
						<a href="#">
							<img
								className="main__logo"
								src="https://media.discordapp.net/attachments/937605817279070300/957705227820220446/12623148_250.png"
							></img>
						</a>
					</li>

					<li>
						<a
							href="#menu"
							className="main__block__navigation-list__item"
						>
							Меню
						</a>
					</li>
					<li>
						<a
							href="#drinks"
							className="main__block__navigation-list__item"
						>
							Напитки
						</a>
					</li>
					<li>
						<a
							href="#deserts"
							className="main__block__navigation-list__item"
						>
							Десерты
						</a>
					</li>
					<li>
						<a
							href="#salat"
							className="main__block__navigation-list__item"
						>
							Салаты
						</a>
					</li>
					<li>
						<a
							href="#feedback"
							className="main__block__navigation-list__item"
						>
							Отзывы
						</a>
					</li>
					<li>
						<h2 className="main__block__navigation-list__item__time">
							+7 (916) 609-12-15
						</h2>
						<h3 className="main__block__navigation-list__item__time">
							пн-пт: 10:00-00:00
						</h3>
						<h3 className="main__block__navigation-list__item__time">
							сб-вс: 12:00-00:00
						</h3>
					</li>
				</ul>
			</div>
			<div className="main__block__content">
				<h1 className="main__block__header">~ Ресторан Приправа ~</h1>
				<p className="main__block__text">
					Одно из лучших заведений в Москве. Здесь царит прекрасная
					атмосфера, идеально подходящая для веселых встреч с друзьями
					и теплых семейных обедов и ужинов.
				</p>
				<hr className="main__block__line" />
				<div>
					<button
						onClick={handleRegistrationClick}
						className="booking__button"
					>
						Забронировать
					</button>
					{showRegistration && (
						<div className="booking__wrapper" id="booking__wrapper">
							<div id="booking__form" className="booking__form">
								<p
									className="form__close__icon__button"
									id="form__close__icon__button"
									onClick={handleRegistrationClose}
								></p>
								<div className="booking_content">
									<div className="booking_wrapper">
										<div className="booking__logo__wrapper">
											<img
												className="booking__logo"
												src="https://media.discordapp.net/attachments/937605817279070300/957705227820220446/12623148_250.png"
											></img>
										</div>
										<h1 className="booking_name">
											Мы позвоним вам с 12 до 22
										</h1>
										<form
											className="booking_form__group"
											id="food"
										>
											<div className="booking__form_group">
												<label className="form_group__label">
													Имя:
												</label>
												<input
													className="form_group__input"
													type="text"
												/>
											</div>
											<div className="booking__form_group">
												<label className="form_group__label">
													Телефон
												</label>
												<input
													className="form_group__input"
													type="text"
												/>
											</div>
											<div className="booking__form_group">
												<label className="form_group__label">
													Количество человек
												</label>
												<input
													className="form_group__input"
													type="number"
												/>
											</div>
											<div className="booking__form_group">
												<label className="form_group__label">
													Дата посещение:
												</label>
												<input
													className="form_group__input"
													type="datetime-local"
												/>
											</div>
											<p
												onClick={
													handleRegistrationClose
												}
												className="send__Booking__btn"
												id="send__Booking"
											>
												Забронировать столик
											</p>
										</form>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default mainBlock;
