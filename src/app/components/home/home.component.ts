import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  quotes: string[] = [
    '“A vida é o que acontece quando estamos ocupados fazendo outros planos.” – John Lennon',
    '“O único modo de fazer um excelente trabalho é amar o que você faz.” – Steve Jobs',
    '“A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.” – Albert Einstein',
    '“A felicidade não é algo pronto. Ela vem das suas próprias ações.” – Dalai Lama',
    '“O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum.” – Elbert Hubbard',
    '“O futuro pertence àqueles que acreditam na beleza dos seus sonhos.” – Eleanor Roosevelt',
    '“O sucesso é a soma de pequenos esforços repetidos dia após dia.” – Robert Collier',
    '“A vida é 10% do que acontece com você e 90% de como você reage a isso.” – Charles R. Swindoll',
    '“O único lugar onde o sucesso vem antes do trabalho é no dicionário.” – Vidal Sassoon',
    '“A persistência é o caminho do êxito.” – Charles Chaplin',
    '“Não importa o quão devagar você vá, desde que não pare.” – Confúcio',
    '“O que você faz hoje pode melhorar todos os seus amanhãs.” – Ralph Marston',
    '“A felicidade não é algo pronto. Ela vem das suas próprias ações.” – Dalai Lama',
    '“Acredite em si mesmo e todo o resto virá naturalmente.” – Elissa M. Allinson',
    '“Não espere. O tempo nunca será justo.” – Napoleon Hill',
    '“A única maneira de fazer um excelente trabalho é amar o que você faz.” – Steve Jobs',
  ];

  currentQuoteIndex: number = Math.ceil(
    Math.random() * (this.quotes.length - 1)
  );
  quoteInterval: any;
  fadeInLeft: boolean = true;

  ngOnInit(): void {
    this.changeQuote();
  }
  ngOndestroy(): void {
    if (this.quoteInterval) {
      clearInterval(this.quoteInterval);
    }
  }

  changeQuote() {
    this.quoteInterval = setInterval(() => {
      this.fadeInLeft = false;
      setTimeout(() => {
        this.currentQuoteIndex = Math.ceil(
          Math.random() * (this.quotes.length - 1)
        );
        this.fadeInLeft = true;
      }, 1000);
    }, 5000);
  }
}
