import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointmentHistory',
  templateUrl: './appointmentHistory.component.html',
  styleUrls: ['./appointmentHistory.component.sass']
})
export class AppointmentHistoryComponent implements OnInit {
  appointmentList = [
    {
      something: '2/2/2019 - Laser Botox',
      address: 'Xyz Cosmetologist, 322 Tarr Rd. Maitland, FL 32211 \n Tel: 407-444-3211',
      schedules: [
        {
          date: 'Nov 22, 2019',
          time: '3PM - 6PM',
          procedure: 'Laser',
          fee: 100,
          discountPercent: 25,
          discountedFee: 75
        },
        {
          date: 'Nov 22, 2019',
          time: '3PM - 6PM',
          procedure: 'Laser',
          fee: 200,
          discountPercent: 25,
          discountedFee: 150
        }
      ]
    },
    {
      something: '2/2/2019 - Laser Botox',
      address: 'Xyz Cosmetologist, 322 Tarr Rd. Maitland, FL 32211 \n Tel: 407-444-3211',
      schedules: [
        {
          date: 'Nov 22, 2019',
          time: '3PM - 6PM',
          procedure: 'Laser',
          fee: 100,
          discountPercent: 25,
          discountedFee: 75
        },
        {
          date: 'Nov 22, 2019',
          time: '3PM - 6PM',
          procedure: 'Laser',
          fee: 200,
          discountPercent: 25,
          discountedFee: 150
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {

  }

}
