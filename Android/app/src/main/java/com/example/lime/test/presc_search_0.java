package com.example.lime.test;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Spinner;

/**
 * Created by lime on 2016-06-09.
 */
public class presc_search_0 extends Activity implements View.OnClickListener{

    final Context context = this;
    private Button btnAlert;
    Spinner dname1;

    @Override
    public void onCreate(Bundle savedInstancedState) {
        super.onCreate(savedInstancedState);
        setContentView(R.layout.presc_1_layout);

        btnAlert = (Button) findViewById(R.id.dnamesearch);
        btnAlert.setOnClickListener(this);
    }

    public void onClick(View v) {
        Intent intent = new Intent(presc_search_0.this, presc_search_1.class);

        v = Tab_prescription.prescriptionHGroup.getLocalActivityManager().startActivity("presc_search_1",
                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

        Tab_prescription.prescriptionHGroup.replaceView(v);
    }
}
