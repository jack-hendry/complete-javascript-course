import View from "./Views";
// import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try again ;) `;
  _successMesage = '';

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new ResultsView();