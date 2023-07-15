import './reviewBlock.scss';
import React from 'react';

function reviewsBlock() {
	return (
		<div className="reviews__block__wrapper">
			<div id="feedback" className="feedback">
				<div className="feedback_wrapper">
					<h1 className="feedback_name">
						<strong>Оставить отзыв</strong>
					</h1>
					<form>
						<div className="form_group">
							<label>Ваше имя и фамилия:</label>
							<input type="text"></input>
						</div>
						<div className="form_group">
							<label>Дата посещение:</label>
							<input type="date"></input>
						</div>
						<div className="form_group">
							<label></label>
							<textarea className="expanding__textarea"></textarea>
						</div>
						<div className="feedback_button_wrapper">
							<p className="feedback_button">Отправить</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default reviewsBlock;
