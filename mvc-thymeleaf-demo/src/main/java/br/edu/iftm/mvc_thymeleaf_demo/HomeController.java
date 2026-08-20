package br.edu.iftm.mvc_thymeleaf_demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("mensagem", "Olá, Spring + Thymeleaf!");
        return "index"; // templates/index.html
    }

    @GetMapping("/sorteio")
    public String sortear(Model model) {
        List<Integer> numeros = gerarNumerosUnicos(6, 1, 60);
        model.addAttribute("numeros", numeros);
        return "sorteio"; // templates/sorteio.html
    }

    private List<Integer> gerarNumerosUnicos(int quantidade, int min, int max) {
        List<Integer> numeros = new ArrayList<>();
        Random random = new Random();

        while (numeros.size() < quantidade) {
            int n = random.nextInt(max - min + 1) + min;
            if (!numeros.contains(n)) {
                numeros.add(n);
            }
        }
        return numeros;
    }
}