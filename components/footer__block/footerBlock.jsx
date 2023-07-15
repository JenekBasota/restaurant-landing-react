import './footerBlock.scss';
import React from 'react';

function footerBlockComponent() {
	return (
		<footer className="footer_back">
			<div className="footer_content">
				<img
					className="footer_img"
					src="https://media.discordapp.net/attachments/937605817279070300/957705227820220446/12623148_250.png"
				></img>
				<h3 className="footer_text">+7 (916) 609-12-15</h3>
				<p className="footer_text">пн-пт: 10:00-00:00</p>
				<p className="footer_text">сб-вс: 12:00-00:00</p>
			</div>
		</footer>
	);
}

export default footerBlockComponent;
