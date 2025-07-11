import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'] // ✅ Correct style binding
})
export class TableComponent {
  authors: any[] = [];
  projects: any[] = [];

  showModal = false;
  modalType: 'author' | 'project' | null = null;

  newAuthor = {
    name: '',
    website: '',
    role: '',
    department: '',
    status: 'Online',
    employed: ''
  };

  newProject = {
    name: '',
    budget: '',
    status: '',
    completion: 0
  };

  openModal(type: 'author' | 'project') {
    this.modalType = type;
    this.showModal = true;
  }

  closeModal() {
    this.modalType = null;
    this.showModal = false;
    this.resetForm();
  }

  saveData() {
    if (this.modalType === 'author') {
      this.authors.push({ ...this.newAuthor });
    } else if (this.modalType === 'project') {
      this.projects.push({ ...this.newProject });
    }
    this.closeModal();
  }

  resetForm() {
    this.newAuthor = {
      name: '',
      website: '',
      role: '',
      department: '',
      status: 'Online',
      employed: ''
    };

    this.newProject = {
      name: '',
      budget: '',
      status: '',
      completion: 0
    };
  }
}
