package com.example.lime.test;

import android.app.TabActivity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TabHost;

/**
 * Created by lime on 2016-05-10.
 */
public class Join extends TabActivity {
    public TabHost tabHost1 = null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.jo_in);

        tabHost1 = (TabHost) findViewById(android.R.id.tabhost);

        tabHost1.addTab(tabHost1.newTabSpec("tab1")
                .setIndicator("약관동의")
                .setContent(new Intent(this, Join_1.class)));

        tabHost1.addTab(tabHost1.newTabSpec("tab2")
                .setIndicator("정보입력")
                .setContent(new Intent(this, Join_2.class)));

        tabHost1.setCurrentTab(0);


    }

}
