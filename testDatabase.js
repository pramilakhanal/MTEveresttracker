const expect = require('chai').expect;

findLastLocationCoordinates = (trecker, boolean) => {
    const { location, descending } = trecker
    let lastKnownLocation = '';
    if(!boolean) {
      for (let locale in location) {
        if(location[locale].checkedIn || location[locale].checkedOut) {
          console.log(locale);
            lastKnownLocation = locale;
        }
        
      }
      }
      else {
      for (let locale in descending) {
        if(descending[locale].checkedIn || descending[locale].checkedOut) {

            lastKnownLocation = locale;
        }
        
      }

      
      
    }
    if(lastKnownLocation === '' && !boolean) {
      lastKnownLocation = 'Lukla';
    }
    else if(lastKnownLocation === '' && boolean) {
      lastKnownLocation = 'Summit';
    }
    return lastKnownLocation;
  }

const fakeTrecker ={
  location: { 
    Lukla: {
      checkedIn: false,
      checkedOut: false
    },
    Phakding: {
      checkedIn: false,
      checkedOut: false
    },
    NamcheBazaar: {
      checkedIn: false,
      checkedOut: false
    },
    Thami: {
      checkedIn: false,
      checkedOut: false
    },
    Khumjung: {
      checkedIn: false,
      checkedOut: false
    },
    Debuche: {
      checkedIn: false,
      checkedOut: false
    },
    Pangboche: {
      checkedIn: false,
      checkedOut: false
    },
    Dingboche: {
      checkedIn: true,
      checkedOut: true
    },
    Lobuje: {
      checkedIn: false,
      checkedOut: false
    },
    EverestBaseCamp: {
      checkedIn: false,
      checkedOut: false
    },
    BaseCampOne: {
      checkedIn: false,
      checkedOut: false
    },
    BaseCampTwo: {
      checkedIn: false,
      checkedOut: false
    },
    BaseCampThree: {
      checkedIn: false,
      checkedOut: false
    },
    BaseCampFour: {
      checkedIn: false,
      checkedOut: false
    },
    Summit: {
      checkedIn: false,
      checkedOut: false
    },
  },
descending: {
  
  Summit: {
      checkedIn: false,
      checkedOut: false
    },

    BaseCampFour: {
      checkedIn: false,
      checkedOut: false
    },

    BaseCampThree: {
      checkedIn: false,
      checkedOut: false
    },

    BaseCampTwo: {
      checkedIn: false,
      checkedOut: false
    },
    BaseCampOne: {
      checkedIn: false,
      checkedOut: false
    },

    EverestBaseCamp: {
      checkedIn: false,
      checkedOut: false
    },

    Debuche: {
      checkedIn: false,
      checkedOut: false
    },

    NamcheBazaar: {
      checkedIn: true,
      checkedOut: true
    },

    Lukla: {
      checkedIn: false,
      checkedOut: false
    },

  },
}
const fakeTreckerNoSomething ={
  location: { 
    Lukla: {
      checkedIn: false,
      checkedOut: false
    },
    Phakding: {
      checkedIn: false,
      checkedOut: false
    },
    NamcheBazaar: {
      checkedIn: false,
      checkedOut: false
    },
    Thami: {
      checkedIn: false,
      checkedOut: false
    },
    Khumjung: {
      checkedIn: false,
      checkedOut: false
    },
    Debuche: {
      checkedIn: false,
      checkedOut: false
    },
    Pangboche: {
      checkedIn: false,
      checkedOut: false
    },
    Dingboche: {
      checkedIn: false,
      checkedOut: false
    },
    Lobuje: {
      checkedIn: false,
      checkedOut: false
    },
    EverestBaseCamp: {
      checkedIn: false,
      checkedOut: false
    },
    BaseCampOne: {
      checkedIn: false,
      checkedOut: false
    },
    BaseCampTwo: {
      checkedIn: false,
      checkedOut: false
    },
    BaseCampThree: {
      checkedIn: false,
      checkedOut: false
    },
    BaseCampFour: {
      checkedIn: false,
      checkedOut: false
    },
    Summit: {
      checkedIn: false,
      checkedOut: false
    },
  },
descending: {
  
  Summit: {
      checkedIn: false,
      checkedOut: false
    },

    BaseCampFour: {
      checkedIn: false,
      checkedOut: false
    },

    BaseCampThree: {
      checkedIn: false,
      checkedOut: false
    },

    BaseCampTwo: {
      checkedIn: false,
      checkedOut: false
    },
    BaseCampOne: {
      checkedIn: false,
      checkedOut: false
    },

    EverestBaseCamp: {
      checkedIn: false,
      checkedOut: false
    },

    Debuche: {
      checkedIn: false,
      checkedOut: false
    },

    NamcheBazaar: {
      checkedIn: false,
      checkedOut: false
    },

    Lukla: {
      checkedIn: false,
      checkedOut: false
    },

  },
}


describe('Last known location', () =>{
  it('should find the last location it is checked in or checked out of and then return that location namefor Ascending', () => {
      expect(findLastLocationCoordinates(fakeTrecker, false)).to.equal('Dingboche');
  });
  it('should find the last location it is checked in or checked out of and then return that location name for Descending', () => {
      expect(findLastLocationCoordinates(fakeTrecker, true)).to.equal('NamcheBazaar');
  });
  it('should return first location if no checkins for ascending', () => {
      expect(findLastLocationCoordinates(fakeTreckerNoSomething, false)).to.equal('Lukla');
  });
  it('should return first location if no checkins for descending', () => {
      expect(findLastLocationCoordinates(fakeTreckerNoSomething, true)).to.equal('Summit');
  });
});