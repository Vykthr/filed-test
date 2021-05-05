import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links = [
    { text: 'Home', to: '' },
    { text: 'Features', to: '' },
    { text: 'Terms', to: '' },
    { text: 'Privacy', to: '' },
    { text: 'Contact Us', to: '' }
  ]

  benefits = [
    'Ability to scale using Dexter, our AI-powered marketing genius.',
    'Client Success Manager who will optimize your Facebook ad campaigns and focus on driving the best possible results for you.',
    'This is a limited time offer only.'
  ]

  comments = [
    {
      highlight: 'It surpassed our expectations', 
      text: 'Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid.', 
      name: 'Tania Y.', 
      position: ' Flexi Content @Hello', 
      img: 'assets/images/user3.jfif'
    },
    {
      highlight: 'The essential marketing tool', 
      text: 'Filed is the most valuable business resource we have EVER purchased. I was amazed at the quality of filed. We were treated like royalty.', 
      name: 'Jack Francis', 
      position: 'Manager @ Accidents Direct', 
      img: 'assets/images/user1.jfif'
    },
    {
      highlight: 'Your company is truly upstanding', 
      text: 'The service was excellent. After using filed my business skyrocketed! It really saves me time and effort.', 
      name: 'Dawna N.', 
      position: 'Editor @ Museum of Typography', 
      img: 'assets/images/user2.jfif'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
