// <card name="" description="" img="" ></card>
class Card extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadow = this.attachShadow({ mode: 'open' });

		const wrapper = document.createElement('article');
		wrapper.setAttribute('class', 'card-item');

		const link = document.createElement('a');
		link.setAttribute('class', 'card-item__link');
		link.setAttribute('href', '/memo/1');

		const image_wrapper = document.createElement('div');
		image_wrapper.setAttribute('class', 'card-item__image-frame');

		const imgUrl = this.getAttribute('img') ?? '';

		const image_content = document.createElement('img');
		image_content.setAttribute('class', 'card-item__image-content');
		image_content.setAttribute('src', imgUrl);

		const info_wrapper = document.createElement('div');
		info_wrapper.setAttribute('class', 'card-item__info');

		const name = this.getAttribute('name') ?? 'no title';
		const description = this.getAttribute('description') ?? 'no description';

		const info_name = document.createElement('span');
		info_name.setAttribute('class', 'card-item__name');
		info_name.textContent = name;

		const info_desc = document.createElement('span');
		info_desc.setAttribute('class', 'card-item__description');
		info_desc.textContent = description;

		const style = document.createElement('style');
		console.log(style.isConnected);
		style.textContent = `
		@import url('../../index.css');
		
		.card-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
		}
		
		.card-item__link {
			margin-left: 0;
			display: flex;
			flex-direction: column;
		}
		
		.card-item__image-frame {
			position: relative;
			width: 100%;
		}
		
		.card-item__image-content {
			display: block;
			width: 100%;
			height: auto;
		}
		
		.card-item__info {
			display: flex;
			flex-direction: column;
			align-items: center;
		
			padding: 0.7em 0;
		}
		
		.card-item__name {
			color: white;
			font-weight: 600;
			font-size: 1.4rem;
			text-overflow: ellipsis;
			letter-spacing: 0.015em;
		}
		
		.card-item__description {
			opacity: 0.6;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		`;

		shadow.append(style);
		console.log(style.isConnected);

		shadow.appendChild(wrapper);
		wrapper.appendChild(link);
		link.appendChild(image_wrapper);
		image_wrapper.appendChild(image_content);
		link.appendChild(info_wrapper);
		info_wrapper.appendChild(info_name);
		info_wrapper.appendChild(info_desc);
	}
}

customElements.define('memo-card', Card);
