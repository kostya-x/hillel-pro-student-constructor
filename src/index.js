'use strict';

// eslint-disable-next-line no-unused-vars
function Student(name, surename, birthYear) {
  const date = new Date;
  const lessonsAmount = 30;
  const attendance = new Array(lessonsAmount);
  const marks = new Array(lessonsAmount);

  this.name = name;
  this.surename = surename;
  this.birthYear = birthYear;

  this.age = () => date.getFullYear() - birthYear;

  this.present = () => {
    for (let i = 0; i < attendance.length; i++) {
      if (typeof attendance[i] === 'undefined') {
        return attendance[i] = true;
      }
    }
  };

  this.absent = () => {
    for (let i = 0; i < attendance.length; i++) {
      if (typeof attendance[i] === 'undefined') {
        return attendance[i] = false;
      }
    }
  };

  this.mark = (mark) => {
    const minMark = 0;
    const maxMark = 10;
    if (mark >= minMark && mark <= maxMark) {
      for (let i = 0; i < marks.length; i++) {
        if (typeof marks[i] === 'undefined') {
          return marks[i] = mark;
        }
      }
    }
  };

  this.summary = () => {
    const goodMarks = 9;
    const goodAttendance = 0.9;

    const averageMark = function() {
      let avgMark = 0;

      for (let i = 0; i < marks.length; i++) {
        if (typeof marks[i] === 'undefined') {
          return avgMark /= i;
        } else {
          avgMark += marks[i];
        }
      }
    };

    const averageAttendance = () => {
      let avgAttendance = 0;

      for (let i = 0; i < attendance.length; i++) {
        if (typeof attendance[i] === 'undefined') {
          return avgAttendance /= i;
        } else {
          avgAttendance += +attendance[i];
        }
      }
    };

    if (averageMark() > goodMarks && averageAttendance() > goodAttendance) {
      return 'Ути какой молодчинка!';
    } else if (averageMark() > goodMarks || averageAttendance() > goodAttendance) {
      return 'Норм, но можно лучше';
    } else {
      return 'Редиска!';
    }
  };
}