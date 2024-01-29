import content from '@assets/tokens.json';
import { IContent } from '@models/content.model';

class Content {
  private static instance: Content;
  private _data: IContent;

  private constructor() {
    this._data = content;
  }

  static getInstance(): Content {
    if (!Content.instance) {
      Content.instance = new Content();
    }

    return Content.instance;
  }

  get<K extends keyof IContent>(key: K): IContent[K] {
    return this._data[key];
  }

  getContent(): IContent {
    return this._data;
  }

  getCertifications() {
    return this._data.certifications;
  }

  getContact() {
    return this._data.contact;
  }

  getEducation() {
    return this._data.education;
  }

  getGames() {
    return this._data.games;
  }

  getPhotography() {
    return this._data.photography;
  }

  getIntroduction() {
    return this._data.introduction;
  }

  getFooter() {
    return this._data.footer;
  }

  getHomepage() {
    return this._data.homepage;
  }

  getProjects() {
    return this._data.projects;
  }

  getSkills() {
    return this._data.skills;
  }

  getSocialMediaLinks() {
    return this._data.social;
  }

  getTechnologies() {
    return this._data.technologies;
  }

  getWorkExperience() {
    return this._data.experience;
  }
}

export default Content.getInstance();
