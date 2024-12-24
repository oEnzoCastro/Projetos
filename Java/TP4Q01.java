import java.io.*;
import java.time.*;
import java.time.format.*;
import java.util.*;

class Pokemon {
    private int id;
    private int generation;
    private String name;
    private String description;
    private ArrayList<String> types;
    private ArrayList<String> abilities;
    private double weight;
    private double height;
    private int captureRate;
    private boolean isLegendary;
    private LocalDate captureDate;

    public Pokemon(int id,
            int generation,
            String name,
            String description,
            ArrayList<String> types,
            ArrayList<String> abilities,
            double weight,
            double heigth,
            int captureRate,
            boolean isLegendary,
            LocalDate captureDate) {
        setId(id);
        setGeneration(generation);
        setName(name);
        setDescription(description);
        setTypes(types);
        setAbilities(abilities);
        setWeight(weight);
        setHeight(height);
        setCaptureRate(captureRate);
        setIsLegendary(isLegendary);
        setCaptureDate(captureDate);
    }

    public Pokemon(String linha) {
        String[] item = linha.split(",");

        setId(Integer.parseInt(item[0]));

        setGeneration(Integer.parseInt(item[1]));

        setName(item[2]);

        setDescription(item[3]);

        ArrayList<String> types = new ArrayList<>();
        types.add(item[4]);
        if (!item[5].isEmpty())
            types.add(item[5]);
        setTypes(types);

        int counter = 6;
        boolean IsDouble = false;
        ArrayList<String> abilities = new ArrayList<>();
        while (!IsDouble) {
            try {
                Double.parseDouble(item[counter]);
                IsDouble = true;
            } catch (NumberFormatException e) {
                if (!item[counter].isEmpty()) {
                    String abilitie = item[counter].replaceAll("[\\[\\]'\"']", "").trim();
                    abilities.add(abilitie);
                    counter
                } else {
                    IsDouble = true;
                }
            }
        }
        setAbilities(abilities);

        if (!item[counter].isEmpty())
            setWeight(Double.parseDouble(item[counter]));
        counter

        if (!item[counter].isEmpty())
            setHeight(Double.parseDouble(item[counter]));
        counter

        setCaptureRate(Integer.parseInt(item[counter]));
        counter

        setIsLegendary(item[counter].equals("1"));
        counter

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        setCaptureDate(LocalDate.parse(item[counter], formatter));
    }

    public Pokemon clone() {
        Pokemon clone = new Pokemon(getId(), getGeneration(), getName(), getDescription(), getTypes(), getAbilities(),
                getWeight(), getHeight(), getCaptureRate(), getIsLegendary(), getCaptureDate());
        return clone;
    }

    public String toString() {

        String pokemonIdChange = "[#" + id + " -> " + name + ": " + description + " - [";

        int counter = 1;
        for (String type : types) {
            if (counter == 1) {
                pokemonIdChange += "'" + type + "'";
                counter
            } else {
                pokemonIdChange += ", '" + type + "'";
            }
        }
        pokemonIdChange += "] - [";
        counter = 1;
        for (String abilitie : abilities) {
            if (counter == 1) {
                pokemonIdChange += "'" + abilitie + "'";
                counter
            } else {
                pokemonIdChange += ", '" + abilitie + "'";
            }
        }
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        pokemonIdChange += "] - " + weight + "kg - " + height + "m - " + captureRate + "% - " + isLegendary + " - "
                + generation + " gen] - " + captureDate.format(formatter);

        return pokemonIdChange;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setGeneration(int generation) {
        this.generation = generation;
    }

    public int getGeneration() {
        return generation;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setTypes(ArrayList<String> types) {
        this.types = types;
    }

    public ArrayList<String> getTypes() {
        return types;
    }

    public void setAbilities(ArrayList<String> abilities) {
        this.abilities = abilities;
    }

    public ArrayList<String> getAbilities() {
        return abilities;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getWeight() {
        return weight;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getHeight() {
        return height;
    }

    public void setCaptureRate(int captureRate) {
        this.captureRate = captureRate;
    }

    public int getCaptureRate() {
        return captureRate;
    }

    public void setIsLegendary(boolean isLegendary) {
        this.isLegendary = isLegendary;
    }

    public boolean getIsLegendary() {
        return isLegendary;
    }

    public void setCaptureDate(LocalDate captureDate) {
        this.captureDate = captureDate;
    }

    public LocalDate getCaptureDate() {
        return captureDate;
    }
}

class No {
    No dir;
    No esq;
    String pokemonName;

    public No(String pokemonName) {
        this.dir = null;
        this.esq = null;
        this.pokemonName = pokemonName;
    }

}

class Arvore {

    No raiz;

    Arvore() {
        this.raiz = null;
    }

    void inserir(String x) {

        // System.out.println(x);
        raiz = inserir(raiz, x);

    }

    No inserir(No tmp, String x) {

        if (tmp == null) {
            tmp = new No(x);
            // System.out.println("Inserido!");
        } else if (x.compareTo(tmp.pokemonName) < 0) {

            // System.out.print("esq ");
            tmp.esq = inserir(tmp.esq, x);

        } else if (x.compareTo(tmp.pokemonName) > 0) {

            // System.out.print("dir ");
            tmp.dir = inserir(tmp.dir, x);

        } else {
            // System.out.println("Nome Igual");
        }

        return tmp;

    }

    void pesquisar(String x) {

        System.out.println(x);
        System.out.print("=>raiz ");
        pesquisar(raiz, x);

    }

    private void pesquisar(No tmp, String x) {

        if (tmp == null) {

            System.out.println("NAO");

        } else if (x.compareTo(tmp.pokemonName) < 0) {

            System.out.print("esq ");
            pesquisar(tmp.esq, x);

        } else if (x.compareTo(tmp.pokemonName) > 0) {

            System.out.print("dir ");
            pesquisar(tmp.dir, x);

        } else {

            System.out.println("SIM");
            return;

        }

    }

}

public class TP4Q01 {
    public static void main(String[] args) {

        ArrayList<Pokemon> pokemons = new ArrayList<Pokemon>();

        Scanner scan = new Scanner(System.in);

        ArrayList<String> pokemonId = new ArrayList<String>();

        String scanPokemonId = scan.nextLine();

        while (!scanPokemonId.equals("FIM")) {
            
            pokemonId.add(scanPokemonId);
            scanPokemonId = scan.nextLine();
        }

        // Guardar Pokemons
        try {
            FileReader fileReader = new FileReader("/tmp/pokemon.csv");

            Scanner fileScanner = new Scanner(fileReader);

            fileScanner.nextLine();
            while (fileScanner.hasNextLine()) {
                
                pokemons.add(new Pokemon(fileScanner.nextLine()));
            }

            fileScanner.close();

        } catch (Exception e) {
            System.out.println("error");
        }

        Arvore arvore = new Arvore();

        for (int i = 0; i < pokemonId.size(); i++) {
             += 4;
            arvore.inserir(pokemons.get(Integer.parseInt(pokemonId.get(i)) - 1).getName());
            // System.out.println(pokemons.get(Integer.parseInt(pokemonId.get(i)) - 1));
        }

        String pesquisa = scan.nextLine();

        while (!pesquisa.equals("FIM")) {
             += 4;
            arvore.pesquisar(pesquisa);

            pesquisa = scan.nextLine();

        }
    }
}
