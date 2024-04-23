import icons from 'url:../../img/icons.svg';
export default class View {
  _data;

  render(data) {
    if(!data || (Array.isArray(data) && !data.length )) return this.renderError(); 

    this._data = data;
    const markup = this._generateMarkup();
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = ` 
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>
  `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderSuccessMsg(message = this._successMesage) {
    const markup = `
     <div class="recipe">
        <div class="message">
          <div>
            <svg>
              <use href="${icon}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
    `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
