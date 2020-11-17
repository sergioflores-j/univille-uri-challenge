package main;

import java.io.IOException;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {

	public static void main(String[] args) throws IOException {

		Scanner sc = new Scanner(System.in);

		List<Integer> valores = new ArrayList<>();
		List<Integer> par = new ArrayList<>();
		List<Integer> impar = new ArrayList<>();

		int quantidadeLinhas = sc.nextInt();
		
		for (int i = 0; i < quantidadeLinhas; i++)
			valores.add(sc.nextInt());

		for (Integer valor : valores) {
			if (isPar(valor))
				par.add(valor);
			else
				impar.add(valor);
		}

		Collections.sort(par);
		Collections.sort(impar);
		Collections.reverse(impar);

		for (Integer y : par)
			System.out.println(y);
		
		for (Integer z : impar)
			System.out.println(z);

		sc.close();
	}
	
	public static boolean isPar(Integer valor) {
		return valor % 2 == 0;
	}

}