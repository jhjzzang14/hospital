package com.example.lime.test;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

/**
 * Created by lime on 2016-05-25.
 */
public class presc_search_2 extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.presc_search2_layout);

        Intent getIntent = getIntent();
        String time = getIntent.getStringExtra("time");
        TextView dnmae2 = (TextView) findViewById(R.id.dayname2);
        dnmae2.setText(time);
    }
}