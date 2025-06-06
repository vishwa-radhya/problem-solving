import java.util.Arrays;

public class t{
    public static void main(String[] args) {
       System.out.println(convert("PAYPALISHIRING", 3));
    //    System.out.println(convert("PAYPALISHIRING", 4));
    }
     public static String convert(String s, int numRows) {
        // Edge case: if the zigzag has only one row, the result is the string itself.
        if (numRows == 1) return s;
        
        // Create an array of StringBuilder for each row.
        StringBuilder[] rows = new StringBuilder[numRows];
        for (int i = 0; i < numRows; i++) {
            rows[i] = new StringBuilder();
        }
        // Current position and direction of traversal.
        int currentRow = 0;
        boolean goingDown = false;
        
        // Traverse the string and fill each row in the zigzag pattern.
        for (char c : s.toCharArray()) {
            // Append current character to the current row.
            rows[currentRow].append(c);
            
            // If we're at the first or the last row, change direction.
            if (currentRow == 0 || currentRow == numRows - 1) goingDown = !goingDown;
            
            // Move to the next row in the current direction.
            currentRow += goingDown ? 1 : -1;
        }
        
        // Combine all rows into one string.
        StringBuilder result = new StringBuilder();
        for (StringBuilder row : rows) {
            result.append(row);
        }
        
        return result.toString();
    }
}